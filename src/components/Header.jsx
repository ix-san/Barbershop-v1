Header.jsx

function Header() {

	return(
		<>
			<div className="flex h-full pb-2">
			  <div className="flex-auto md:w-1/5">
			  </div>
			  <div className="flex-auto md:w-3/5">
			  	<div className="flex-row md:grid md:grid-cols-6 md:gap-x-6 flex items-center justify-center text-left">
			  		<div className="invisible md:visible font-pt-serif font-bold text-lg">
			  			<a href="#servicios">
			  				Servicios
			  			</a>
			  		</div>
				  	<div className="invisible md:visible font-pt-serif font-bold text-lg">
				  		<a href="#nosotros">
			  				Nosotros
			  			</a>
				  	</div>
				  	<div className="md:col-span-2 max-w-[40%] md:max-w-[90%]">
				  		<a href="#barbershop">
			  				<img src="../src/images/logo-barbershop-Trans.png"/>
			  			</a>
				  	</div>
				  	<div className="invisible md:visible font-pt-serif font-bold text-lg">
				  		<a href="#equipo">
			  				Equipo
			  			</a>
				  	</div>
				  	<div className="invisible md:visible font-pt-serif font-bold text-lg">
				  		<a href="#contacto">
			  				Contacto
			  			</a>
				  	</div>
			  	</div>
			  </div>
			  <div className="flex-auto md:w-1/5"></div>
			</div>    
	    </>
		)
}

export default Header