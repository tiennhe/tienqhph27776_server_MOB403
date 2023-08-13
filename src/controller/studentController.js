const studenModel = require('./../Model/studentModel')


class  foodController{
    async index(req , res , next){
        try {
            const result = await studenModel.find().exec();
            res.json(result);
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
        } 
        
        add(req , res , next){
            const student = new studenModel({
              name: req.body.name,
              age: req.body.age,
              diemTb: req.body.diemTb,
              status: req.body.status,
              Image: req.body.Image,
            }
             );
             student.save();
             res.json(student);  
    }


    async edit(req , res , next){
        try {
            const { id } = req.params;
            const { name, age, diemTb , status , Image} = req.body;
            const student = await studenModel.findByIdAndUpdate(
              id,
              { name, age, diemTb , status , Image },
              { new: true }
            );
            res.json(student);
          } catch (err) {
            console.error('Error updating product:', err);
            res.status(500).json({ error: 'Internal server error' });
          }

    }
    async delete(req , res , next){
      try {
        const { id } = req.params;
        await studenModel.findByIdAndRemove(id);
        res.json({ success: true });
      } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'Internal server error' });
      }
}
}

module.exports = new foodController
      