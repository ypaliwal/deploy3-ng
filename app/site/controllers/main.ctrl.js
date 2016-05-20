(function() {

	angular
		.module('TPapp')
		.controller('MainCtrl', MainCtrl);

	function MainCtrl($state,$location, projectSrv) {
		var mainVm = this;
		console.log('Main page loaded correctly.');

		// Public functions/data
		mainVm.toMap = toMap;
		mainVm.projectSrv = projectSrv;
		mainVm.openModal = openModal;

		function toMap() {
			console.log('This works');
			$location.path('/map');
		}

		function openModal(projName) {
			console.log(projName);
			// Find total proj data using name (parse through array)
			// pass this data to the

			mainVm.projArr = projectSrv.allProjects;
			for(var i = 0; i < mainVm.projArr.length; i++) {
				if(mainVm.projArr[i].name == projName) {
					mainVm.currProj = mainVm.projArr[i];
				}
			}


			// MODAL; Click events
			
			var modal = document.getElementById('myModal');
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			modal.style.display = "block";
			span.onclick = function() {
			    modal.style.display = "none";
			}
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			}

		}
	}

})();