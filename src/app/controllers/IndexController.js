class IndexController {

    async show(req, res) {        
      return res.status(200).json("Request Success");
    }
  
    async store (req, res) {


      const height = req.body.height;
      const rise = req.body.rise;
      const fall = req.body.fall;
      
      let position = 0;
      let quantityRise = 0;
      let quantityFall = 0;
      while( position < height) {
        position = position + rise;
        quantityRise++;

        if( position < height) {
          position = position - fall;
          quantityFall++;
        }
          
      }

      const result = {
        quantityRise: quantityRise,
        quantityFall: quantityFall,
      }

      return res.status(200).json(result);
    }
  }
  
  module.exports = new IndexController();