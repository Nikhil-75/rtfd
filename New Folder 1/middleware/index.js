const userValidator = (req, res, next) => {

    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;



    //function isEmailValid(email) {
        if (!email)
            return false;
    
    
        var valid = emailRegex.test(email);
        if(!valid)
            return false;
    
        // Further checking of some things regex can't handle
        var parts = email.split("@");
        if(parts[0].length>64)
            return false;
    
        var domainParts = parts[1].split(".");
        if(domainParts.some(function(part) { return part.length>63; }))
            return false;
    
        return true;

}


        if (req.body.password.length > 6) {
            
          next();
        } else {
          throw new Error("password length must be greater than 6");
        }
      
        if (req.body.email && req.body.name !== "") {
          next();
        } else {
          throw new Error("error, fields are required");
        }
      };
      
      module.exports = userValidator;


     