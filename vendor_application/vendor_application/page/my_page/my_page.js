// frappe.pages['my-page'].on_page_load = function(wrapper) {
// 	new MyPage(wrapper);
	
// }
// MyPage = Class.extend({
// 	init: function (wrapper) {
// 		this.page = frappe.ui.make_app_page({
// 			parent: wrapper,
// 			title: 'My Page',
// 			single_column: true
// 		});
		
// 		this.make();
// 	},
// 	make: function(){
		
// 		$(frappe.render_template("my_page", {})).appendTo(page.body);
// 		}
// 		})
frappe.pages['my-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'View Image Details',
		single_column: true
	});

	page.set_title('Result Details')
	let $btn = page.set_primary_action('Back To Search Image', function() {
		frappe.set_route("ai-image-search")
	});
    // refresh total


    frappe.require('https://cdn.jsdelivr.net/npm/chart.js', function() {
        // Code to execute after chart.js is loaded
        // For example, you can initialize a chart here
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
    title: 'Wetter',
    data: {
        labels: ["FBE", "BE", "ME", "EE", "FEE"],
        datasets: [{label: '# of Votes',
        data: [2, 9, 55, 20, 1],
        backgroundColor: 'rgb(255, 99, 71)',
        borderColor: [
            'rgba(255, 99, 132, 1)'],
        tension:0.5
    }]
    },
    options: {
        title: {
            display: true,
            text: 'Wetterdaten'
        },
        scales: {
            yAxes: [{
                id: 'left-y-axis',
                position: 'left',
                ticks: {
                    stepSize: 10
                }
            }, {
                id: 'right-y-axis',
                position: 'right',
                ticks: {
                    stepSize: 100
                }
            }]
        }
    }
        });
    });
    

	$(frappe.render_template("my_page", {})).appendTo(page.body);
	// Change event for input[name="upload-img"]
document.querySelector('input[name="upload-img"]').addEventListener('change', function() {
    readURL(this, document.querySelector('.file-wrapper')); // Change the image
});
document.querySelector('.pdf').addEventListener('click', function() {
    console.log('Before frappe.call');
	frappe.call({
        method: "vendor_application.vendor_application.page.my_page.my_page.generate_invoice",
        callback: function(response) {
          // Handle the response here if needed
          console.log(response.message);
        }
      });
    console.log('After frappe.call');
});
// Click event for .close-btn
document.querySelector('.close-btn').addEventListener('click', function() {
    let file = document.querySelector('input[name="upload-img"]');
    document.querySelector('.file-wrapper').style.backgroundImage = 'unset';
    document.querySelector('.file-wrapper').classList.remove('file-set');
    file.parentNode.replaceChild(file.cloneNode(true), file);
});

// Click event for .close-btn
document.querySelector('.card').addEventListener('click', function() {
	frappe.set_route("List", "User");
});
console.log()

// FILE
function readURL(input, obj) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            obj.style.backgroundImage = 'url(' + e.target.result + ')';
            obj.classList.add('file-set');
        };
        reader.readAsDataURL(input.files[0]);
    }
}

}

