class HelloController { 
    index(request, response) {
        return response.json({message: "welcome to API to serve rocket movies APP!"});
    };
};

module.exports = HelloController;