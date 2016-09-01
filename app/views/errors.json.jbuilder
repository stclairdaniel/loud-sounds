@errors.keys.each do |key|
  @errors[key].each do |value|
    json.set! key, "#{key.capitalize} #{value}"
  end
end
# this does not work for error keys with multiple values.
# need to look into better method.
