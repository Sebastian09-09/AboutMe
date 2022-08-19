function loadSkills(){
    var skill = document.getElementById("skill").innerHTML;
    if (skill == "👉 Skills"){
        document.getElementById("skill").innerHTML = "👇 Skills";
        document.getElementById("skills").style.display = "block";
    }else{
        document.getElementById("skill").innerHTML = "👉 Skills";
        document.getElementById("skills").style.display = "none";
    }
};

function loadLinks(){
    var link = document.getElementById("link").innerHTML;
    if (link == "👉 Links"){
        document.getElementById("link").innerHTML = "👇 Links";
        document.getElementById("links").style.display = "block";
    }else{
        document.getElementById("link").innerHTML = "👉 Links";
        document.getElementById("links").style.display = "none";
    }
};

function loadProjects(){
    var project = document.getElementById("project").innerHTML;
    if (project == "👉 Projects"){
        document.getElementById("project").innerHTML = "👇 Projects";
        document.getElementById("projects").style.display = "block";
    }else{
        document.getElementById("project").innerHTML = "👉 Projects";
        document.getElementById("projects").style.display = "none";
    }
};