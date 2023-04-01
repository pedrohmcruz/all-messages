const Link = require('../models/Link');

const addLink = async (req, res) => {
  let link = new Link(req.body);

  try {
    let doc = await link.save();
    res.redirect('/');
  } catch (error) {
    res.render('index', {error, body:req.body})
  }
}

const allLinks = async (req, res) => {
  try {
    let docs = await Link.find({});
    res.render('all', {links:docs});
  } catch (error) {
      res.send(error)
  }
}

const deleteLink = async (req, res) => {
  let id = req.params.id; 
  if(!id) { 
    id = req.body.id 
  }

  try {
    let doc = await Link.findByIdAndDelete(id)
    res.redirect('/');
  } catch (error) {
    res.status(404).send(error);
  }

}

const loadLink = async (req, res) => {
  let id = req.params.id;   

  try {
    let doc = await Link.findById(id)
    res.render('edit', {error:false, body:doc});
  } catch (error) {
    res.status(404).send(error);
  }
}

const editLink = async (req, res) => {
  let link = {};
  link.title = req.body.title;
  link.description = req.body.description;
  link.message = req.body.message;

  let id = req.params.id; 
  if(!id) { 
    id = req.body.id 
  }

  try {
    let doc = await Link.updateOne({_id:id}, link);
    res.redirect('/');
  } catch (error) {
    res.render('edit', {error, body:req.body})
  }
}

module.exports = {addLink, allLinks, deleteLink, loadLink, editLink}