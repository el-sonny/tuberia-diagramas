module.exports = {
	"tipos de denuncias" : [
		{
			"handle" : "bullying",
			"nombre" : "Bullying",
			"estados" : [
				{
					"paso" : "director",
					"opciones" : [1,4]
				},
				{
					"paso" : "telefono",
					"opciones" : [1,4],
					"variables" : {
						"telefono" : "01 800 222 2676",
						"horario" : "8 am a 8:30 pm"
					}
				},
				{
					"paso" : "canalizacion",
					"opciones" :[3,]
				}

			]
		}
	]
}
