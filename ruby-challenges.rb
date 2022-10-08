# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#### Adding more testing variables:
letter_a = 'A'
# Expected output: ["tea", "water", "soda water"]

# Method Name: includes_letter
# input1: array
# input2: string
# output: an array of filtered values
###
# Steps
# 1.) I'm going to use .filter because it will return a modified version of the array that ONLY includes the elements we're filtering for.
# 2.) I'll use the method .include? to check if the string we're passing in exists inside of the current element being iterated over.
# 3.) I'm also going to use .downcase on both the element being iterated on as well as the string, to account for case sensitivity.


def includes_letter(array, str)
  array.filter{ |val| val.downcase.include? str.downcase }
end

p includes_letter(beverages_array, letter_o) # => ["coffee", "soda water"]
p includes_letter(beverages_array, letter_t) # => ["tea", "water", "soda water"]
p includes_letter(beverages_array, letter_a) # => ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# Method Name: combine_alphebetize
# input1: hash
# output: a single array of alphebetized values
###
# Steps
# 1.) I'm going to use .values to extract only values (which are arrays in our case) from the hash.
# 2.) Then, I'll use .flatten in order to combine the elements from the arrays into one big array.
# 3.) Then, I'll use .sort to sort them alphebetically.

def combine_alphebetize(hash)
  hash.values.flatten.sort
end

p combine_alphebetize(us_states) # => ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Vermont", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
  attr_accessor :model, :wheels, :current_speed
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def bike_info
    "The #{@model} bike has #{@wheels} wheels, and is going #{@current_speed} mph."
  end
  def pedal_faster(num)
    @current_speed = @current_speed + num
  end
  def brake(num)
    # If the current speed minus the number being passed in would result in a negative number, we're going to just set the current_speed to 0.
    if (@current_speed - num).negative?
    @current_speed = 0
    else
      # Otherwise, it can be subtracted normally.
      @current_speed = @current_speed - num
    end

  end
end

p my_bike = Bike.new('trek') # => <Bike:0x000000011d122370 @model="trek", @wheels=2, @current_speed=0>
p my_bike.bike_info # => "The trek bike has 2 wheels, and is going 0 mph."

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.


p my_bike.pedal_faster(10) # => 10
p my_bike.pedal_faster(18) # => 28
p my_bike.brake(5) # => 23
p my_bike.brake(25) # => 0
###------ Testing that brake will work without going negative
p my_bike.current_speed # => 0
p my_bike.pedal_faster(42) # => 42
p my_bike.brake(21) # => 21

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
