var main = function() {
  var cities = ['Tokyo', 
                'Seoul', 
                'Mexico City', 
                'New York', 
                'Mumbai', 
                'Jakarta', 
                'Sao Paulo', 
                'Delhi', 
                'Keihanshin', 
                'Shanghai', 
                'Manila', 
                'Hong Kong', 
                'Los Angeles', 
                'Kolkata', 
                'Moscow',
                'Cairo', 
                'Buenos Aires',
                'London', 
                'Beijing', 
                'Karachi'];
  
  $("#search").autocomplete({
      source: cities
    });
 
};
 
$(document).ready(main);