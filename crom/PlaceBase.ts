import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {RoleType} from "crom_l1_composed/RoleType";
import {Place} from "crom_l1_composed/Place";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class PlaceBase
			extends BasicEObjectImpl
			implements Place
			{
				private _lower:number = 0;
				get lower():number{
					return this._lower;
				}
				set lower(value:number){
					this._lower = value; 
				}
				private _upper:number = 0;
				get upper():number{
					return this._upper;
				}
				set upper(value:number){
					this._upper = value; 
				}
				private _holder:RoleType = null;
				get holder():RoleType{
				
					return this._holder;
				}
				set holder(value:RoleType) {
					let oldvalue = this._holder;
					this._holder = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.PLACE__HOLDER , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return PlaceBase.eStaticClass;
				}
			
			
				public basicSetHolder(newobj:RoleType, msgs:NotificationChain):NotificationChain {
					let oldobj = this._holder;
					this._holder = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.PLACE__HOLDER, oldobj, newobj);
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
						case Crom_l1_composedPackageLiterals.PLACE__LOWER:
							return this.lower;
						case Crom_l1_composedPackageLiterals.PLACE__UPPER:
							return this.upper;
						case Crom_l1_composedPackageLiterals.PLACE__HOLDER:
							return this.holder;
					}
					//return this.eGetFromBasicEObjectImpl(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.PLACE__LOWER:
							this.lower = <number> newValue;
							return;
						case Crom_l1_composedPackageLiterals.PLACE__UPPER:
							this.upper = <number> newValue;
							return;
						case Crom_l1_composedPackageLiterals.PLACE__HOLDER:
							this.holder = <RoleType> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
