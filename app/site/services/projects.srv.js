(function() {
	
	angular
		.module('TPapp')
		.service('projectSrv', ProjectsService);

	function ProjectsService($state) {
		var self = this;

		// Public Variables
		self.condoProjects = [];
		self.resProjects = [];
		self.allProjects = [];

		// Public functions
		self.addCondoProject = addCondoProject;
		self.addResProject = addResProject;

		function addCondoProject(obj) {
			self.condoProjects.push(obj);
			self.allProjects.push(obj);
		}

		function addResProject(obj) {
			self.resProjects.push(obj);
			self.allProjects.push(obj);
		}

		// ADD CONDO PROJECTS
		if(self.condoProjects.length === 0) {
			// 
			addCondoProject({
				name: 'Tux Condos',
				location: 'King West, Toronto',
				price: 'TBD',
				occupancy: 'TBD',
				img: 'imgs/projects/condos/tux_condos.png'
			});

			addCondoProject({
				name: 'Carlyle Condos',
				location: 'Fashion District, Toronto',
				price: 'TBD',
				occupancy: 'TBD',
				img: 'imgs/projects/condos/carlyle_condos.png'
			});

			addCondoProject({
				name: 'Bay Scollard Condos',
				location: 'Yorkville, Toronto',
				price: 'TBD',
				occupancy: 'TBD',
				img: 'imgs/projects/condos/bayScollard_condos.png'
			});

			// addCondoProject({
			// 	name: '',
			// 	location: '',
			// 	price: '',
			// 	occupancy: '',
			// 	img: 'imgs/projects/condos/'
			// });
		}

		// ADD RESIDENTIAL PROJECTS
		if(self.resProjects.length === 0) {
			addResProject({
				name: 'The Brownstones',
				location: 'Leaside, Toronto',
				price: '$1.5 million',
				occupancy: 'TBD',
				img: 'imgs/projects/res/leaside_res.png'
			});

			addResProject({
				name: 'Sutton Collection Townhomes',
				location: 'Toronto',
				price: '$1.5 million',
				occupancy: 'Regent Park',
				img: 'imgs/projects/res/sutton_res.png'
			});

			addResProject({
				name: 'St. Leslieville Lofts',
				location: 'Leslieville, Toronto',
				price: 'TBD',
				occupancy: 'Fall 2017',
				img: 'imgs/projects/res/leslieville_res.png'
			});

			// addResProject({
			// 	name: '',
			// 	location: '',
			// 	price: '',
			// 	occupancy: '',
			// 	img: 'imgs/projects/condos/'
			// });
		}

	}

})();