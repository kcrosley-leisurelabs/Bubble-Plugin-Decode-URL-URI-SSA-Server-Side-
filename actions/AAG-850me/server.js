function(properties, context) {
    return { encoded_text: properties.input_string ? encodeURI(properties.input_string) : null }
}