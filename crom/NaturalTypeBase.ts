import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {NaturalType} from "crom_l1_composed/NaturalType";
import {RigidTypeImpl} from "crom_l1_composed/RigidTypeImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class NaturalTypeBase
			extends RigidTypeImpl
			implements NaturalType
			{
				private _tr_extends:NaturalType = null;
				get tr_extends():NaturalType{
				
					return this._tr_extends;
				}
				set tr_extends(value:NaturalType) {
					let oldvalue = this._tr_extends;
					this._tr_extends = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.NATURAL_TYPE__TR_EXTENDS , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return NaturalTypeBase.eStaticClass;
				}
			
			
				public basicSetTr_extends(newobj:NaturalType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._tr_extends;
					this._tr_extends = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.NATURAL_TYPE__TR_EXTENDS, oldobj, newobj);
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
						case Crom_l1_composedPackageLiterals.NATURAL_TYPE__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.NATURAL_TYPE__INCOMING:
							return this.incoming;
						case Crom_l1_composedPackageLiterals.NATURAL_TYPE__OUTGOING:
							return this.outgoing;
						case Crom_l1_composedPackageLiterals.NATURAL_TYPE__ATTRIBUTES:
							return this.attributes;
						case Crom_l1_composedPackageLiterals.NATURAL_TYPE__OPERATIONS:
							return this.operations;
						case Crom_l1_composedPackageLiterals.NATURAL_TYPE__TR_EXTENDS:
							return this.tr_extends;
					}
					//return this.eGetFromRigidType(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.NATURAL_TYPE__TR_EXTENDS:
							this.tr_extends = <NaturalType> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
