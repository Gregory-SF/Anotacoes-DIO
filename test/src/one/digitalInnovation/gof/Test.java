package one.digitalInnovation.gof;

import one.digitalInnovation.gof.strategy.Comportamento;
import one.digitalInnovation.gof.strategy.ComportamentoAgressivo;
import one.digitalInnovation.gof.strategy.ComportamentoDefensivo;
import one.digitalInnovation.gof.strategy.ComportamentoNormal;
import one.digitalInnovation.gof.strategy.Robo;

public class Test {
	
	public static void main(String[] args) {
		
		// Strategy
		
		Comportamento normal = new ComportamentoNormal();
		Comportamento defensivo = new ComportamentoDefensivo();
		Comportamento agressivo = new ComportamentoAgressivo();

		Robo robo = new Robo();
		robo.setComportamento(normal);
		robo.mover();
		robo.mover();
		robo.setComportamento(agressivo);
		robo.mover();
		robo.mover();
		robo.setComportamento(defensivo);
		robo.mover();
		robo.mover();
	
	}
}
