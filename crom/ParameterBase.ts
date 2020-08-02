import {TypedElementImpl} from "crom_l1_composed/TypedElementImpl";
import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {Parameter} from "crom_l1_composed/Parameter";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class ParameterBase
			extends TypedElementImpl
			implements Parameter
			{

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return ParameterBase.eStaticClass;
				}
			
			
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.PARAMETER__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.PARAMETER__TYPE:
							return this.type;
					}
					//return this.eGetFromTypedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
