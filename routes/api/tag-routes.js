const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    
    include: [{model: Product, through: ProductTag}]
  }).then((data) => {
    res.json(data)
  })
  
  // find all tags
  // be sure to include its associated Product data
});

 router.get('/:id', (req, res) => {
 Tag.findByPk(req.params.id,{
    include: [{model: Product , through: ProductTag}]
  })
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name})
  
.then((data) => {
  res.json(data)
})
.catch((err) => {
  res.json(err);
})
});

router.put('/:id', (req, res) => {
  Tag.update({
    product_id: req.params.product_id,
    tag_id: req.params.tag_id,


  },{
    where: {
      id: req.params.id
    }
  })

  // update a tag's name by its `id` value
});

router.delete('/:id',async  (req, res) => {
   Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  // delete on tag by its `id` value
});

module.exports = router;
