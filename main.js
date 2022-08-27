var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://drive.google.com/file/d/1TsDPmwpVJtBM1_HH__yGTUW5H6gVOpLM/view?usp=sharing", "https://drive.google.com/file/d/1vlOUkfDxfC1tBQPIL6Cj6MlncqrojxxJ/view?usp=sharing" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Sonal Baravkar", "Sayee Baravkar", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}