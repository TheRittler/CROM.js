import {RelationTarget} from "crom_l1_composed/RelationTarget";
import {InternalEObject} from "ecore/InternalEObject";

export interface Relation
extends InternalEObject

{
	
	
	
	getTarget(): RelationTarget ;
	
	getSource(): RelationTarget ;

}

