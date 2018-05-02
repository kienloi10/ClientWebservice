$(document).ready(function() {
    getData();
});

function getData() {
    $.ajax({
        url: "http://localhost:8080/WebService/resources/greeting/2",
        method: "GET",
        success: function(data) {
            // console.log(data);
            var html = "";
            
                html += "<p>" + data.ndch + "<br> " + data.a + ", " + data.b + ","+ data.c + "," + data.d + ","+ data.da+
                "</p>";
            
            $('.result').html(html);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function deleteId(id) {
    $.ajax({
        url: "http://janeto.us.to:7752/api/contact/" + id,
        method: "DELETE",
        success: function(data) {
            window.alert("Delete id " + id + " successfully !");
            getData();
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function create() {
    var name = $('.create input[name="name"]').val();
    var email = $('.create input[name="email"]').val();

    if (name == "" || email == "") {
        window.alert("Name and Email are required !");
    } else {
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact",
            method: "POST",
            headers: {
                ContentType: "application/json"
            },
            data: {
                name: name,
                email: email,
                message: $('.create textarea').val()
            },
            success: function(data) {
                window.alert("Create successfully !");
                getData();
                $('.create input[name="name"]').val("");
                $('.create input[name="email"]').val("");
                $('.create textarea').val("");
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
}



function getOne(id) {
    $.ajax({
        url: "http://janeto.us.to:7752/api/contact/" + id,
        method: "GET",
        success: function(data) {
            $('.update input[name="name"]').val(data.name);
            $('.update input[name="id"]').val(data.id);
            $('.update input[name="email"]').val(data.email);
            $('.update textarea').val(data.message);
        },
        error: function(err) {
            console.log(err);
        }
    });
}

function update() {
    var name = $('.update input[name="name"]').val();
    var email = $('.update input[name="email"]').val();

    if (name == "" || email == "") {
        window.alert("Name and Email are required !");
    } else {
        var id = $('.update input[name="id"]').val();
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact/" +id,
            method: "PUT",
            headers: {
                ContentType: "application/json"
            },
            data: {
                name: name,
                email: email,
                message: $('.update textarea').val()
            },
            success: function(data) {
                window.alert("Update successfully !");
                getData();
                $('.update input[name="name"]').val("");
                $('.update input[name="email"]').val("");
                $('.update textarea').val("");
            },
            error: function(err) {
                console.log(err);
            }
        });
    }
}


