@errors.each do |error|
  json.set!(error.key, '#{error.key.capitalize} #{error.value)')
end
