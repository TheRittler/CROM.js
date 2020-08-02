import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {RigidType} from "crom_l1_composed/RigidType";
import {TypeImpl} from "crom_l1_composed/TypeImpl";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class RigidTypeBase
			extends TypeImpl
			implements RigidType
			{

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return RigidTypeBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.RIGID_TYPE__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.RIGID_TYPE__INCOMING:
							return this.incoming;
						case Crom_l1_composedPackageLiterals.RIGID_TYPE__OUTGOING:
							return this.outgoing;
						case Crom_l1_composedPackageLiterals.RIGID_TYPE__ATTRIBUTES:
							return this.attributes;
						case Crom_l1_composedPackageLiterals.RIGID_TYPE__OPERATIONS:
							return this.operations;
					}
					//return this.eGetFromType(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				public eBaseStructuralFeatureID(derivedFeatureID:number, baseClass:Function):number {
					return super.eBaseStructuralFeatureID(derivedFeatureID, baseClass);
				}
				
				public eDerivedStructuralFeatureID_number_Function(baseFeatureID:number, baseClass:Function):number {
					return super.eDerivedStructuralFeatureID_number_Function(baseFeatureID, baseClass);
				}
				
			}
			
