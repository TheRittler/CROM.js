import {RelationshipConstraint} from "crom_l1_composed/RelationshipConstraint";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {ConstraintImpl} from "crom_l1_composed/ConstraintImpl";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RelationshipConstraintBase
			extends ConstraintImpl
			implements RelationshipConstraint
			{

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RelationshipConstraintBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					//return this.eGetFromConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
