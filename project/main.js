var images=["cartoon-old-woman-cane-260nw-1376524529","father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395","mami","istockphoto-980239992-612x612","istockphoto-831537796-612x612","kisspng-stock-photography-royalty-free-clip-art-cute-boy-5a9d703be95d44.7222647115202673239559"];
var name=["Giyarsi Malviya","Dr.Narayan Prasad Malviya","Jyoti Malviya","Ganesh Malviya","Sonal Malviya","Priyansh Malviya"];
var i=0;
function nextslide(){
    i++;
    var number_of_family_members=6;
    if(i>umber_of_family_members)
    {
        i=0;
    }
    var updatedimage=images[i];
    var updatename=name[i];
    document.getElementById("name").innerHTML=updatedname;
    document.getElementById("family").src=updatedimage;
}