def reverse_string(str)
  # split string
  split_str = str.split("")
  # create empty array
  reversed = []
  # iterate through string and shovel into array
  str.size.times { reversed << split_str.pop }
  # join reversed string and return
  return reversed.join
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution