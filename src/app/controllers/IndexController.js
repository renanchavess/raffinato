class IndexController {

    async show(req, res) {        
      return res.status(200).json("Request Success");
    }
  
    async update(req, res){
      
    } 
  
    async delete(req, res){
      
      return res.status(404).json();
    }
  }
  
  module.exports = new IndexController();