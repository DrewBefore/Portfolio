var express = require('express');
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
var Project = require("./data/projects.json");

//mongoose.connect("mongodb://localhost/portfolio");
// mongoose.connect('process.env.PORTFOLIOURL', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// SAVE NEW PROJECT
// var testProject = new Project(
//   {
//     title: "test10", 
//     sub_title: "Sub_title",
//     description: "This is my first test, DESCRIPTION",
//     details: ["blahblahblah1", "blahblah2", "blahblah3"],
//     website: "dbefore.com",
//     thumbnail: "/stylesheets/img/FINAL location-03.png",
//     imgs: ["test.img"]
  
// });
// testProject.save(function(err, project){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("successfully saved project to database");
//   }
// });

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Set favicon
app.use(favicon(__dirname + '/public/favicon.ico'));

//test
app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/projects', function(req, res){
  res.render('pages/projects', {projects: Project.projects})
  //   Project.find({}, function(err, allProjects){
  //     if(err){
  //       console.log(err);
  //     } else {
  //       res.render('pages/projects', {projects:allProjects});
  //     }
  // });
});

app.get('/projects/:title', function(req, res){
  var index = 0;
  for (var i = 0; i < Project.projects.length; i++){
    // look for the entry with a matching `code` value
    if (Project.projects[i].title == req.params.title){
       // we found it
      // obj[i].name is the matched result
      index = i;
    }
  }
    res.render('pages/project', {project: Project.projects[index], allProjects:Project.projects});
    // Project.findOne({title:req.params.title}, function(err, foundProject){
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     Project.find({}, function(err, all){
    //       res.render('pages/project', {project:foundProject, allProjects:all});
    //     });
    //   }
    // });
});

//test
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


