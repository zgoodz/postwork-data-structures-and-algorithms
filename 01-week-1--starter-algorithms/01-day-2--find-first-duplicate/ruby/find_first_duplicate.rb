def find_first_duplicate(arr)
  # create counter hash with default 0
  counter_hash = Hash.new(0)

  # iterate over each element of array
  arr.each do |e|
    counter_hash[e] = counter_hash[e] += 1

    # if the counter_hash key reaches 2
    return e if counter_hash[e] > 1
  end

  # if no matches
  return -1
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
  puts

  puts "Expecting: 'added'"
  puts "=>", find_first_duplicate(['first', 'added', 'second', 'added', 'third'])

  puts 

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([])
end

# Please add your pseudocode to this file
# And a written explanation of your solution
