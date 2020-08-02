import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {DataType} from "crom_l1_composed/DataType";
import {RigidTypeImpl} from "crom_l1_composed/RigidTypeImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class DataTypeBase
			extends RigidTypeImpl
			implements DataType
			{
				private _serializable:boolean = false;
				get serializable():boolean{
					return this._serializable;
				}
				set serializable(value:boolean){
					this._serializable = value; 
				}
				private _tr_extends:DataType = null;
				get tr_extends():DataType{
				
					return this._tr_extends;
				}
				set tr_extends(value:DataType) {
					let oldvalue = this._tr_extends;
					this._tr_extends = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.DATA_TYPE__TR_EXTENDS , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return DataTypeBase.eStaticClass;
				}
			
			
				public basicSetTr_extends(newobj:DataType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._tr_extends;
					this._tr_extends = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.DATA_TYPE__TR_EXTENDS, oldobj, newobj);
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
						case Crom_l1_composedPackageLiterals.DATA_TYPE__NAME:
							return this.name;
						case Crom_l1_composedPackageLiterals.DATA_TYPE__INCOMING:
							return this.incoming;
						case Crom_l1_composedPackageLiterals.DATA_TYPE__OUTGOING:
							return this.outgoing;
						case Crom_l1_composedPackageLiterals.DATA_TYPE__ATTRIBUTES:
							return this.attributes;
						case Crom_l1_composedPackageLiterals.DATA_TYPE__OPERATIONS:
							return this.operations;
						case Crom_l1_composedPackageLiterals.DATA_TYPE__SERIALIZABLE:
							return this.serializable;
						case Crom_l1_composedPackageLiterals.DATA_TYPE__TR_EXTENDS:
							return this.tr_extends;
					}
					//return this.eGetFromRigidType(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.DATA_TYPE__SERIALIZABLE:
							this.serializable = <boolean> newValue;
							return;
						case Crom_l1_composedPackageLiterals.DATA_TYPE__TR_EXTENDS:
							this.tr_extends = <DataType> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
