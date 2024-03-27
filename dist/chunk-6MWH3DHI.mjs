import{f as x}from"./chunk-IBNRZ227.mjs";import{a as E,b as o,c as S,d as v,e as I}from"./chunk-K7C7TUE5.mjs";import{TypedEmitter as M}from"tiny-typed-emitter";var k=class{#r;#a;#t;#e;entities=new Map;localPlayer;constructor(n,t,e,a){this.#r=n,this.#a=t,this.#t=e,this.#e=a,this.localPlayer={entityId:0n,entityType:1,name:"You",class:0,gearLevel:0,characterId:0n,stance:0,stats:new Map,skills:new Map,items:{}}}processNewPC(n){let t=n.parsed;if(!t)return;let e={entityId:t.pcStruct.playerId,entityType:1,name:t.pcStruct.name,class:t.pcStruct.classId,gearLevel:t.pcStruct.maxItemLevel,characterId:t.pcStruct.characterId,stance:0,stats:this.#e.getStatPairMap(t.pcStruct.statPair),skills:new Map,items:{}};this.entities.set(e.entityId,e);let a=this.#r.getEntityId(e.characterId);a&&this.#a.changeEntityId(a,t.pcStruct.playerId),this.#r.addMapping(e.characterId,e.entityId),this.#a.completeEntry(e.characterId,e.entityId),this.#t.newPC(t,this.localPlayer.characterId,n.time),e.itemSet=this.getPlayerSetOptions(t.pcStruct.equipItemDataList);let r=[];t.pcStruct.equipItemDataList.forEach(s=>{s.id!==void 0&&s.slot!==void 0&&r.push({id:s.id,slot:s.slot})}),e.items.equipList=r;let i=[];return t.pcStruct.equipLifeToolDataList.forEach(s=>{s.id!==void 0&&s.slot!==void 0&&i.push({id:s.id,slot:s.slot})}),e.items.lifeToolList=i,e}processInitEnv(n){let t=n.parsed;if(!t)return;this.localPlayer.entityId!==0n&&this.#a.changeEntityId(this.localPlayer.entityId,t.playerId),this.entities.clear();let e={entityId:t.playerId,entityType:1,name:this.localPlayer.name,class:this.localPlayer.class,gearLevel:this.localPlayer.gearLevel,characterId:this.localPlayer.characterId,stance:this.localPlayer.stance,stats:this.localPlayer.stats,skills:this.localPlayer.skills,items:this.localPlayer.items};this.localPlayer=e,this.entities.set(e.entityId,e),this.#r.clear(),this.#t.Clear(n.time),e.characterId!==0n&&this.#r.addMapping(e.characterId,e.entityId),this.localPlayer&&this.localPlayer.characterId&&this.localPlayer.characterId>0n&&this.#a.completeEntry(this.localPlayer.characterId,t.playerId)}processInitPC(n){let t=n.parsed;if(!t)return;this.entities.clear();let e={entityId:t.playerId,entityType:1,name:t.name,class:t.classId,gearLevel:t.gearLevel,characterId:t.characterId,stance:0,stats:this.#e.getStatPairMap(t.statPair),skills:new Map,items:t.characterId===this.localPlayer.characterId?this.localPlayer.items:{}};this.localPlayer=e,this.entities.set(e.entityId,e),this.#r.addMapping(e.characterId,e.entityId),this.#a.setOwnName(t.name),this.#a.completeEntry(e.characterId,t.playerId),this.#t.RemoveLocalObject(t.playerId,n.time);for(let a of t.statusEffectDatas){let r=this.getSourceEntity(a.sourceId);this.#t.RegisterStatusEffect(this.#t.buildStatusEffect(a,t.playerId,r.entityId,1,n.time))}return e}processNewNpc(n){let t=n.parsed;if(!t)return;let e=!1,a=this.#e.npc.get(t.npcStruct.typeId);a&&[6,7,9,10].includes(x[a.grade])&&(e=!0);let r={entityId:t.npcStruct.objectId,entityType:2,name:a?.name??t.npcStruct.objectId.toString(16),typeId:t.npcStruct.typeId,isBoss:e,grade:a?.grade??"none",pushimmune:a?.pushimmune??!1,stats:this.#e.getStatPairMap(t.npcStruct.statPair),level:t.npcStruct.level,balanceLevel:t.npcStruct.balanceLevel??t.npcStruct.level},i=this.#e.getNpcEsther(t.npcStruct.typeId);i!==void 0&&(r.entityType=4,r.name=i.name,r.icon=i.icon),this.entities.set(r.entityId,r),this.#t.RemoveLocalObject(t.npcStruct.objectId,n.time);for(let s of t.npcStruct.statusEffectDatas){let c=this.getSourceEntity(s.sourceId);this.#t.RegisterStatusEffect(this.#t.buildStatusEffect(s,t.npcStruct.objectId,c.entityId,1,n.time))}return r}processNewNpcSummon(n){let t=n.parsed;if(!t)return;let e=!1,a=this.#e.npc.get(t.npcData.typeId);a&&["boss","raid","epic_raid","commander"].includes(a.grade)&&(e=!0);let r={entityId:t.npcData.objectId,entityType:3,name:a?.name??t.npcData.objectId.toString(16),ownerId:t.ownerId,typeId:t.npcData.typeId,isBoss:e,grade:a?.grade??"none",pushimmune:a?.pushimmune??!1,stats:this.#e.getStatPairMap(t.npcData.statPair),level:t.npcData.level,balanceLevel:t.npcData.balanceLevel??t.npcData.level};this.#t.RemoveLocalObject(t.npcData.objectId,n.time);for(let i of t.npcData.statusEffectDatas){let s=this.getSourceEntity(i.sourceId);this.#t.RegisterStatusEffect(this.#t.buildStatusEffect(i,t.npcData.objectId,s.entityId,1,n.time))}return this.entities.set(r.entityId,r),r}getPlayerSetOptions(n){let t=new Map;n.forEach(a=>{if(a.id&&a.slot&&a.slot>=1&&a.slot<=6){let r=this.#e.itemSet.items.get(a.id);if(r){let i=t.get(r.setname);i||(i=new Map,t.set(r.setname,i)),i.set(r.level,(i.get(r.level)??0)+1)}}});let e=[];return t.forEach((a,r)=>{let i=this.#e.itemSet.seteffects.get(r);if(!i)return;let s=0,c=0;for(let[l,f]of[...a.entries()].sort((u,p)=>p[0]-u[0])){let u=i.get(l);if(!u)return;for(let[p,h]of[...u.entries()])p>s&&f+c>=p&&(e.push(...h.options),s=Math.max(s,p));c=f}}),e}getSourceEntity(n){let t=this.entities.get(n);if((t?.entityType===5||t?.entityType===3)&&(n=t.ownerId),t=this.entities.get(n),t)return t;let e={entityId:n,entityType:2,name:n.toString(16),stats:new Map};return this.entities.set(n,e),e}guessIsPlayer(n,t){let e=this.#e.getSkillClassId(t);if(e!==0){let a;if(n.entityType===1){let r=n;if(r.class===e)return r;a={entityId:r.entityId,entityType:1,name:r.name,class:e,gearLevel:r.gearLevel,characterId:r.characterId,stance:r.stance,stats:r.stats,skills:new Map,items:{}}}else a={entityId:n.entityId,entityType:1,name:n.name,class:e,gearLevel:0,characterId:0n,stance:0,stats:new Map,skills:new Map,items:{}};return this.entities.set(n.entityId,a),a}return n}getOrCreateEntity(n){let t=this.entities.get(n);return t||(t={entityId:n,entityType:0,name:n.toString(16),stats:new Map},this.entities.set(n,t)),t}getEntityByName(n){return[...this.entities.values()].find(t=>t.name===n)}};var d,P,y,b,L,T,R,w=class extends M{constructor(t,e,a=!0,r=!!process.env.DEV){super();S(this,b);S(this,T);E(this,"PartyStatusEffectRegistry");E(this,"LocalStatusEffectRegistry");S(this,d,void 0);S(this,P,void 0);S(this,y,void 0);E(this,"debug");E(this,"trace",!1);this.PartyStatusEffectRegistry=new Map,this.LocalStatusEffectRegistry=new Map,this.debug=r,v(this,d,t),v(this,P,e),v(this,y,a)}getStatusEffectRegistryForPlayer(t,e){let a=this.getPlayerRegistry(e),r=a.get(t);if(r)return r;let i=new Map;return a.set(t,i),i}hasStatusEffectRegistryForPlayer(t,e){return this.getPlayerRegistry(e).has(t)}getPlayerRegistry(t){switch(t){case 1:return this.LocalStatusEffectRegistry;case 0:return this.PartyStatusEffectRegistry;default:break}return this.LocalStatusEffectRegistry}RemoveLocalObject(t,e){let a=this.LocalStatusEffectRegistry.get(t);if(a)for(let[,r]of a)this.RemoveStatusEffect(t,r.instanceId,1,void 0,e);this.LocalStatusEffectRegistry.delete(t)}RemovePartyObject(t,e){let a=this.PartyStatusEffectRegistry.get(t);if(a)for(let[,r]of a)this.RemoveStatusEffect(t,r.instanceId,0,void 0,e);this.PartyStatusEffectRegistry.delete(t)}RegisterStatusEffect(t){let e=this.getStatusEffectRegistryForPlayer(t.targetId,t.type),a=e.get(t.instanceId);a?o(this,y)&&a.expirationTimer&&(clearTimeout(a.expirationTimer),a.expirationTimer=void 0):t.effectType===0&&this.emit("shieldApplied",t),e.set(t.instanceId,t),this.SetupStatusEffectTimeout(t)}HasAnyStatusEffect(t,e,a,r){if(!this.hasStatusEffectRegistryForPlayer(t,e))return!1;let i=this.getStatusEffectRegistryForPlayer(t,e);for(let[,s]of i)if(!(!o(this,y)&&!this.IsReplayStatusEffectValidElseRemove(s,r))){for(let c of a)if(c===s.statusEffectId)return!0}return!1}IsReplayStatusEffectValidElseRemove(t,e){return t.expireAt===void 0||t.expireAt.getTime()>e.getTime()?!0:(this.ExpireStatusEffectByTimeout(t),!1)}HasAnyStatusEffectFromParty(t,e,a,r,i){if(!this.hasStatusEffectRegistryForPlayer(t,e))return!1;let s=this.getStatusEffectRegistryForPlayer(t,e);for(let[,c]of s)if(!(!o(this,y)&&!this.IsReplayStatusEffectValidElseRemove(c,i))&&r.includes(c.statusEffectId)){let l=o(this,d).getPartyIdFromEntityId(c.sourceId);if(this.ValidForWholeRaid(c))return l!==void 0;if(l===a)return!0}return!1}RemoveStatusEffect(t,e,a,r,i){if(!this.hasStatusEffectRegistryForPlayer(t,a))return;let s=this.getStatusEffectRegistryForPlayer(t,a),c=s.get(e);return c&&(o(this,y)&&(clearTimeout(c.expirationTimer),c.expirationTimer=void 0),s.delete(e),r===4&&(o(this,y)||this.IsReplayStatusEffectValidElseRemove(c,i))&&this.RegisterValueUpdate(c,c.value,0)),c}GetStatusEffects(t,e,a,r){if(!this.hasStatusEffectRegistryForPlayer(t,e))return[];let i=this.getStatusEffectRegistryForPlayer(t,e);if(!o(this,y))for(let[,c]of i)this.IsReplayStatusEffectValidElseRemove(c,a);let s=[...i.values()];return r!==void 0?s.filter((c,l,f)=>c.sourceId===r):s}GetStatusEffectsFromParty(t,e,a,r){if(!this.hasStatusEffectRegistryForPlayer(t,e))return[];let i=this.getStatusEffectRegistryForPlayer(t,e);if(!o(this,y))for(let[,s]of i)this.IsReplayStatusEffectValidElseRemove(s,r);return[...i.values()].filter(s=>this.ValidForWholeRaid(s)?o(this,d).getPartyIdFromEntityId(s.sourceId)!==void 0:a===o(this,d).getPartyIdFromEntityId(s.sourceId))}Clear(t){let e=0;for(let[,r]of this.LocalStatusEffectRegistry){for(let[,i]of r)this.RemoveStatusEffect(i.targetId,i.instanceId,i.type,void 0,t);e+=r.size}let a=0;for(let[,r]of this.PartyStatusEffectRegistry){for(let[,i]of r)this.RemoveStatusEffect(i.targetId,i.instanceId,i.type,void 0,t);a+=r.size}this.trace&&console.log("On Clear SE in local",e,"in party",a),this.LocalStatusEffectRegistry.clear(),this.PartyStatusEffectRegistry.clear()}UpdateDuration(t,e,a,r){let s=this.getStatusEffectRegistryForPlayer(e,r).get(t);if(s){let c=a-s.timestamp;if(o(this,y)&&s.expirationTimer&&(this.trace&&console.log("Clearing timeout for",s.instanceId,"because of duration change"),clearTimeout(s.expirationTimer),s.expirationTimer=void 0),s.expireAt){let l=s.expireAt.getTime()+Number(c),f=l-s.pktTime.getTime();f>0?(this.trace&&console.log("Extending duration by",c,"ms","New timeout delay",f,"from",s.expireAt.toISOString(),"to",new Date(l).toISOString()),o(this,y)&&(s.expirationTimer=setTimeout(this.ExpireStatusEffectByTimeout.bind(this,s),f)),s.expireAt=new Date(l),s.timestamp=a):s.expireAt=void 0}}else this.debug&&console.error("Tried to update duration for SE with instanceId",t," on target",e,"but where is no such SE registered")}SyncStatusEffect(t,e,a,r,i){let s=I(this,T,R).call(this,e,i),c=s?0:1,l=s?e:a;if(!l)return;let u=this.getStatusEffectRegistryForPlayer(l,c).get(t);if(!u)return;let p=u.value;u.value=r,this.RegisterValueUpdate(u,p,r)}ValidForWholeRaid(t){return(t.buffCategory===3||t.buffCategory===1||t.buffCategory===2)&&t.category===1&&t.showType===1}SetupStatusEffectTimeout(t){if(t.expirationDelay>0&&t.expirationDelay<604800){let e=t.pktTime.getTime()>t.occurTime.getTime()?t.pktTime:t.occurTime,a=Math.ceil(t.expirationDelay*1e3),r=e.getTime()+a+w.TIMEOUT_DELAY_MS-t.pktTime.getTime();t.expireAt=new Date(t.pktTime.getTime()+r),this.trace&&console.log("Setting up statuseffect expiration time for",t.name,t.instanceId,"to",t.expireAt.toISOString(),"with delay",r),o(this,y)&&(t.expirationTimer=setTimeout(this.ExpireStatusEffectByTimeout.bind(this,t),r))}}ExpireStatusEffectByTimeout(t){this.debug&&console.error("Triggered timeout on",t.name,"with iid",t.instanceId),this.RemoveStatusEffect(t.targetId,t.instanceId,t.type,void 0,new Date)}RegisterValueUpdate(t,e,a){t.effectType===0&&this.emit("shieldChanged",t,e,a)}newPC(t,e,a){let r=I(this,T,R).call(this,t.pcStruct.characterId,e);r?this.RemovePartyObject(t.pcStruct.characterId,a):this.RemoveLocalObject(t.pcStruct.playerId,a);for(let i of t.pcStruct.statusEffectDatas)this.RegisterStatusEffect(this.buildStatusEffect(i,r?t.pcStruct.characterId:t.pcStruct.playerId,i.sourceId,r?0:1,a))}buildStatusEffect(t,e,a,r,i){let s=t.value?t.value.readUInt32LE():0,c=t.value?t.value.readUInt32LE(8):0,l=s<c?s:c,f=0,u=0,p=0,h="Unknown",m=1,g=o(this,P).skillBuff.get(t.statusEffectId);if(g){switch(h=g.name,g.category){case"debuff":f=1;break}switch(g.buffcategory){case"bracelet":u=1;break;case"etc":u=2;break;case"battleitem":u=3;break}switch(g.iconshowtype){case"all":p=1;break}switch(g.type){case"shield":m=0;break}}return{instanceId:t.effectInstanceId,sourceId:a,statusEffectId:t.statusEffectId,targetId:e,type:r,dbTarget:g?.target??"none",value:l,buffCategory:u,category:f,showType:p,expirationDelay:t.totalTime,expirationTimer:void 0,timestamp:t.endTick,expireAt:void 0,occurTime:t.occurTime,name:h,pktTime:i,effectType:m,stackCount:t.stackCount}}getStatusEffects(t,e,a,r){let i=[],s=[],c=I(this,b,L).call(this,t,a),l=this.GetStatusEffects(c?t.characterId:t.entityId,c?0:1,r,void 0);for(let f of l)s.push([f.statusEffectId,f.sourceId,f.stackCount]);if(e){let f=I(this,b,L).call(this,e,a),u=o(this,d).isEntityInParty(t.entityId),p=u?o(this,d).getPartyIdFromEntityId(t.entityId):void 0,h=u&&p?this.GetStatusEffectsFromParty(f?e.characterId:e.entityId,f?0:1,p,r):this.GetStatusEffects(f?e.characterId:e.entityId,f?0:1,r,t.entityId);for(let m of h)m.type===1&&m.category===1&&m.sourceId!==t.entityId&&m.dbTarget==="self"||i.push([m.statusEffectId,m.sourceId,m.stackCount])}return[s,i]}},D=w;d=new WeakMap,P=new WeakMap,y=new WeakMap,b=new WeakSet,L=function(t,e){if(t.entityType!==1)return!1;let a=t;return I(this,T,R).call(this,a.characterId,e)},T=new WeakSet,R=function(t,e){let a=o(this,d).isCharacterInParty(e),r=o(this,d).isCharacterInParty(t);if(a){if(!r||t===e)return!1;let i=o(this,d).getPartyIdFromCharacterId(e),s=o(this,d).getPartyIdFromCharacterId(t);return i===s}return!1},E(D,"TIMEOUT_DELAY_MS",1e3);export{D as a,k as b};