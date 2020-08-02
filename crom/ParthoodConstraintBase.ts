import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Parthood} from "crom_l1_composed/Parthood";
import {IntraRelationshipConstraintImpl} from "crom_l1_composed/IntraRelationshipConstraintImpl";
import {ParthoodConstraint} from "crom_l1_composed/ParthoodConstraint";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class ParthoodConstraintBase
			extends IntraRelationshipConstraintImpl
			implements ParthoodConstraint
			{
				private _kind:Parthood = Parthood.UNCONSTRAINED;
				get kind():Parthood{
					return this._kind;
				}
				set kind(value:Parthood){
					this._kind = value; 
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ParthoodConstraintBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.PARTHOOD_CONSTRAINT__RELATION:
							return this.relation;
						case Crom_l1_composedPackageLiterals.PARTHOOD_CONSTRAINT__KIND:
							return this.kind;
					}
					//return this.eGetFromIntraRelationshipConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.PARTHOOD_CONSTRAINT__KIND:
							this.kind = <Parthood> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
