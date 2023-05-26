const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/',  (req, res) => {
  // find all categories
 
   Category.findAll({
    include: [{ model: Product, through: ProductTag }]
  }).then((data) => {
    res.json(data)
  })

  
  // be sure to include its associated Products


});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
   Category.FindByPK(req.params.id,{
    inlude: [{ model: Product, through: ProductTag }]
  })
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
    Category.create({
      category_name: req.body.category_name,
  }).then((data) => {
    res.json(data)
  })

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  Category.update({
      
        category_name: req.body.category_name,

  },
  {
    where: {
      id: req.params.id
    }
  }
  ).then((updatedCategory) => {
    res.json(updatedCategory);
  
  })

})

router.delete('/:id', async (req, res) => {

   Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((Deleteditem) => {
 res.json(Deleteditem)
  }
  )

  // delete a category by its `id` value
});

module.exports = router;
