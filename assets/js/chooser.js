// Define the component
Vue.component('chooser', {
  template: `
    <div class="row" style="padding-top:20px">
        <div class="col-md-3" style="padding-right:50px">
            <div class="row" v-for="question in questions">  
               <div class="col-md-12">
                <div class="form-group">
                  <label>{{ question.question }}</label><i v-if="question.tooltip" style="cursor:pointer; padding-left:5px; color:#CCC" class="fa fa-info-circle" data-container="body" data-toggle="popover" data-placement="top" :title="question.tooltip"></i>
                  <select class="form-control question" @change="filterOptions" v-bind:id="question.unique_id" required>
                   <option>--</option>
		   <option v-for="option in question.options" v-bind:value="option">{{option}}</option>
                  </select>
                </div>
                </div>
            </div>
            <button @click="resetOptions" class="btn btn-danger" style="margin-top:30px">Reset</button>
        </div>
        <div class="col">
            <div class="row" v-for="row in rows">
                <div :class="selected_class + ' col-md-2 card d-flex cell'" v-for="tool in row" @mouseover="showToolIndex = tool.unique_id" @mouseout="showToolIndex = null" :id="'card-tool-' + tool.unique_id" style="padding-top:30px">
		    <div :id="'row-tool-body-' + tool.unique_id" :data-url="tool.url" @click="openToolTab" class="card-body align-items-center d-flex justify-content-center"><a class="link" :href="tool.url" target="_blank"><span style="color:white; font-weight:bold">{{ tool.name }}</span></a>
                      </div><span class="badge" :style="'background-color: ' + lookupCategoryColor(tool.category) + ';'">{{ tool.category }}</span>
	         </div>
             </div>
             <div class="row">
               <div class="col-md-12" style="padding-left:0px">
                 <div v-for="tool in tools" class="description" v-show="showToolIndex === tool.unique_id" style="font-weight:400">
                   <i style="color:#CCC" class="fa fa-question-circle"></i> {{ tool.description }}
                 </div>
               </div>
            </div>
       </div>
    </div>`,
  data() {
    data = {
      tools: window._data.data.tools,
      questions: window._data.data.questions,
      selected_class: window._data.selected_class || "bg-success",
      unselected_class: window._data.unselected_class || "bg-secondary",
      lookup: null,                               // question lookup
      rows: [],
      colors: null,
      colspan: window._data.colspan || 5,          // span for each column
      tool_lookup: null,                      // tool lookup
      showToolIndex: null,
      choices: Object()
    }

    // Update the user on choices in console
    console.log("       questions: " + data.questions.length)
    console.log("           tools: " + data.tools.length)
    console.log("         colspan: " + data.colspan)
    console.log("           divid: " + data.divid)
    console.log("  selected_class: " + data.selected_class)
    console.log("unselected_class: " + data.unselected_class)
    return data

  },

  // Create a lookup dictionary of questions and tools
  mounted() {
    var lookup = Object()
    var tool_lookup = Object()
    var rows = [];
    var colors = Object()

    $.each(this.questions, function(i, question) {
      lookup[question.unique_id] = question;
    });
    $.each(this.tools, function(i, tool) {
      tool_lookup[tool.unique_id] = tool;
      colors[tool.category] = getNamedColor(tool.category);
    });
  
    // Split tools into rows
    for (var i=0; i<this.tools.length; i+=this.colspan) {
         rows.push(this.tools.slice(i,i+this.colspan));
    }
    this.rows = rows;
    this.colors = colors;
    this.lookup = lookup;
    this.tool_lookup = tool_lookup;
  },

  methods: {

    // Clear all selections to start over 
    resetOptions: function(event) {
      $.each($(".question option:selected"), function() {
        $(this).prop('selected', false);
      });
      this.choices = Object();
      $(".cell").removeClass(this.unselected_class);
      $(".cell").addClass(this.selected_class);
    },

    filterOptions: function(event) {
      var question_id = event.target.id;

      // Prepare for multiple select (put into list)
      var choices = Array($('#' + question_id).val());

      // Update choices
      this.choices[question_id] = choices;
      this.calculateChoices(this.choices, this.lookup);

    },

    // Helper functions
    lookupCategoryColor: function(key) {
        return this.colors[key];
    },

    // Clicking on a card opens the tool in a new window
    openToolTab: function(event) {
        console.log(event.target)
        var tool_url = $('#' + event.target.id).attr("data-url");
        window.open(tool_url, '_blank');
    },

    // Based on content in this.choices, adjust tools shown
    calculateChoices: function(choices, lookup) {

      // Keep a reference to vue data
      data = this

      // loop through tools, and assess choices for each 
      $.each(this.tools, function(i, tool) {

        // select tool on the highest level, eliminated if anything doesn't fit
        var selected = true;

        // loop through current question choices
        $.each(choices, function(question_id, values) {

          // default for a question/tool pair (a cell) is selected (leave showing)
          var question = lookup[question_id];

          // Only assess if the key is defined as an attribute
          if (question.unique_id in tool) {

            // Valid options for the tool
            var options = tool[question.unique_id]

            // Special case, if options is length 1 and empty, doesn't change anything
            if ((options.length == 1) && (options[0] == "")) {
              console.log("Tool " + tool.name + " is agnostic about question " + question.unique_id)
            } else {

              // We currently don't have question types, but if we do, can add logic here
              // If any attribute is not in list, don't show it
              $.each(values, function(ii, value) {

                // Special case, unsure means "I'll accept all, leave as current value
                if ((value == "not sure") || (value == "--")) {
                  console.log("Not sure for resouce:" + tool.unique_id + " and question: " + question.unique_id + " or -- does not change current decision.")
                }

                // Otherwise, if the value is included in options, it is also selected
                else if ($.inArray(value, options) == -1) {
                  console.log(value + ' is not in ' + options);
                  selected = false;
                }
              });
            }
          }
        });

        console.log("Tool " + tool.name + " selected is " + selected);

        // Change color of cell depending on selection (we can change to color cell or entire row)
        //var cell_id = "#cell-question-" + question_id + "-tool-" + tool.unique_id
        var card_id = "#card-tool-" + tool.unique_id

        if (selected == true) {
          $(card_id).removeClass(data.unselected_class);
          $(card_id).addClass(data.selected_class);
        } else {
          $(card_id).removeClass(data.selected_class);
          $(card_id).addClass(data.unselected_class);
        }
      });
    }
  }
})


function Chooser(options) {
  // Options accepted include:
  // options.data: must include tools and questions validated/generated from reccomend-o-matic.py
  // options.colspan: numbers of columns to span (defaults to 5)
  // options.divid: divid for the vue (includes <recommend-o-matic></recommend-o-matic> defaults to #app
  // options.selected_class: class to indicate option is available (defaults to bg-success)
  // options.unselected_class: class to indicate option not available (defaults to bg-secondary)
  
  // Hacky method to pass data to component
  window._data = options
  divid = options.divid || "#app"
  console.log(window._data)

  // Instantiate the view, it will use window data
  new Vue({
    el: divid
  })
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// In the case that we want to assign colors, use this first
function getNamedColor(key) {
  if (key=="database"){
     return "rgb(178, 146, 169)";
  } else if (key == "compute") {
     return "rgb(128, 182, 131);";
  } else if (key == "website") {
     return "rgb(85, 216, 118);";
  } else if (key=="software") {
    return "rgb(90, 167, 171)";
  }
  return getRandomColor();
}
