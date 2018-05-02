// $(document).ready(function() {
//     getData();
// });

// function getData() {
//     $.ajax({
//         url: "http://localhost:8080/WebService/resources/greeting/1",
//         method: "GET",
//         success: function(data) {
//             // console.log(data);
//             var html = "";
            
//                 html += "<p>" + data.ndch + ". " + data.a + ", " + data.b + ", " + data.c + "," + data.d + "," + data.da +"<button onclick='deleteId(" + data[i].id + ")'>x</button></p>";
        
//             $('.result').html(html);
//         },
//         error: function(err) {
//             console.log(err);
//         }
//     });
// }

// function getOne(id) {
//     $.ajax({
//         url: "http://janeto.us.to:7752/api/contact/" + id,
//         method: "GET",
//         success: function(data) {
//             $('.update input[name="name"]').val(data.name);
//             $('.update input[name="id"]').val(data.id);
//             $('.update input[name="email"]').val(data.email);
//             $('.update textarea').val(data.message);
//         },
//         error: function(err) {
//             console.log(err);
//         }
//     });

// function deleteId(id) {
//     $.ajax({
//         url: "http://localhost:8080/WebService/resources/greeting/" + id,
//         method: "DELETE",
//         success: function(data) {
//             window.alert("Delete id " + id + " successfully !");
//             getData();
//         },
//         error: function(err) {
//             console.log(err);
//         }
//     });
// }