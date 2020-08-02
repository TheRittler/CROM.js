import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {TypedElement} from "crom_l1_composed/TypedElement";
import {RigidType} from "crom_l1_composed/RigidType";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class TypedElementBase
			extends BasicEObjectImpl
			implements TypedElement
			{
				private _name:string = '';
				get name():string{
					return this._name;
				}
				set name(value:string){
					this._name = value; 
				}
				private _type:RigidType = null;
				get type():RigidType{
				
					return this._type;
				}
				set type(value:RigidType) {
					let oldvalue = this._type;
					this._type = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.TYPED_ELEMENT__TYPE , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return TypedElementBase.eStaticClass;
				}
			
			
				public basicSetType(newobj:RigidType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._type;
					this._type = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.TYPED_ELEMENT__TYPE, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				
			
				public eGet_number_boolean_boolean(featureID:number, resolve:boolean, coreType:boolean):any{
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.TYPED_ELEMENT__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.TYPED_ELEMENT__TYPE:
							return this.type;
					}
					//return this.eGetFromNamedElement(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.TYPED_ELEMENT__NAME:
							this.name = <string> newValue;
							return;
						case Crom_l1_composedPackageLiterals.TYPED_ELEMENT__TYPE:
							this.type = <RigidType> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
