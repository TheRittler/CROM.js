import {Crom_l1_composedPackageLiterals} from "crom_l1_composed/Crom_l1_composedPackageLiterals";
import {InterRelationshipConstraint} from "crom_l1_composed/InterRelationshipConstraint";
import {Relationship} from "crom_l1_composed/Relationship";
import {RelationshipConstraintImpl} from "crom_l1_composed/RelationshipConstraintImpl";
import {OrderedSet} from "ecore/OrderedSet";
import {EClass} from "ecore/EClass";
import {NotificationChain} from "ecore/NotificationChain";
import {ENotificationImpl} from "ecore/ENotificationImpl";
import {NotificationImpl} from "ecore/NotificationImpl";
import {InternalEObject} from "ecore/InternalEObject";
import {BasicEObjectImpl} from "ecore/BasicEObjectImpl";
		
			export class InterRelationshipConstraintBase
			extends RelationshipConstraintImpl
			implements InterRelationshipConstraint
			{
				private _first:Relationship = null;
				get first():Relationship{
				
					return this._first;
				}
				set first(value:Relationship) {
					let oldvalue = this._first;
					this._first = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.INTER_RELATIONSHIP_CONSTRAINT__FIRST , oldvalue, value));
					}
				}
				private _second:Relationship = null;
				get second():Relationship{
				
					return this._second;
				}
				set second(value:Relationship) {
					let oldvalue = this._second;
					this._second = value;
					if (this.eNotificationRequired()){
						this.eNotify(new ENotificationImpl(this, NotificationImpl.SET,Crom_l1_composedPackageLiterals.INTER_RELATIONSHIP_CONSTRAINT__SECOND , oldvalue, value));
					}
				}

			
				public static eStaticClass:EClass;
				
				protected eStaticClass():EClass{
					
					return InterRelationshipConstraintBase.eStaticClass;
				}
			
			
				public basicSetSecond(newobj:Relationship, msgs:NotificationChain):NotificationChain {
					let oldobj = this._second;
					this._second = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.INTER_RELATIONSHIP_CONSTRAINT__SECOND, oldobj, newobj);
						if (msgs == null){
							msgs = notification;
						}
						else{
							msgs.add(notification);
						}
					}
					return msgs;
				}
				public basicSetFirst(newobj:Relationship, msgs:NotificationChain):NotificationChain {
					let oldobj = this._first;
					this._first = newobj;
					if (this.eNotificationRequired()) {
						let notification = new ENotificationImpl(this, NotificationImpl.SET, Crom_l1_composedPackageLiterals.INTER_RELATIONSHIP_CONSTRAINT__FIRST, oldobj, newobj);
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
						case Crom_l1_composedPackageLiterals.INTER_RELATIONSHIP_CONSTRAINT__FIRST:
							return this.first;
						case Crom_l1_composedPackageLiterals.INTER_RELATIONSHIP_CONSTRAINT__SECOND:
							return this.second;
					}
					//return this.eGetFromRelationshipConstraint(featureID, resolve, coreType);
					return super.eGet(featureID, resolve, coreType);
				}
				
				public eSet_number_any(featureID:number, newValue:any):void {
					switch (featureID) {
						case Crom_l1_composedPackageLiterals.INTER_RELATIONSHIP_CONSTRAINT__FIRST:
							this.first = <Relationship> newValue;
							return;
						case Crom_l1_composedPackageLiterals.INTER_RELATIONSHIP_CONSTRAINT__SECOND:
							this.second = <Relationship> newValue;
							return;
					}
					super.eSet_number_any(featureID, newValue);
				}

				
			}
			
