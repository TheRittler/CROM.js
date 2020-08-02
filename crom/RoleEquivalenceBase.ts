import {RoleEquivalence} from "crom_l1_composed/RoleEquivalence";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {RoleConstraintImpl} from "crom_l1_composed/RoleConstraintImpl";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RoleEquivalenceBase
			extends RoleConstraintImpl
			implements RoleEquivalence
			{

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RoleEquivalenceBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.ROLE_EQUIVALENCE__FIRST:
							return this.first;
						case Crom_l1_composedPackageLiterals.ROLE_EQUIVALENCE__SECOND:
							return this.second;
					}
					//return this.eGetFromRoleConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
