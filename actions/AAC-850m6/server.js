function(properties, context) {
    return { decoded_text: properties.input_string ? decodeURI(properties.input_string) : null }
}