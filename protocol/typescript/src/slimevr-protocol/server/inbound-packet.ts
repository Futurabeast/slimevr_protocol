// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Acknowledgement, AcknowledgementT } from '../../slimevr-protocol/misc/acknowledgement';
import { AssignTrackerRequest, AssignTrackerRequestT } from '../../slimevr-protocol/server/assign-tracker-request';
import { ChangeSettingsRequest, ChangeSettingsRequestT } from '../../slimevr-protocol/server/change-settings-request';
import { ChangeSkeletonConfigRequest, ChangeSkeletonConfigRequestT } from '../../slimevr-protocol/server/change-skeleton-config-request';
import { ConnectionRequest, ConnectionRequestT } from '../../slimevr-protocol/server/connection-request';
import { InboundUnion, unionToInboundUnion, unionListToInboundUnion } from '../../slimevr-protocol/server/inbound-union';
import { ResetRequest, ResetRequestT } from '../../slimevr-protocol/server/reset-request';
import { SettingsRequest, SettingsRequestT } from '../../slimevr-protocol/server/settings-request';
import { SkeletonConfigRequest, SkeletonConfigRequestT } from '../../slimevr-protocol/server/skeleton-config-request';


export class InboundPacket {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):InboundPacket {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsInboundPacket(bb:flatbuffers.ByteBuffer, obj?:InboundPacket):InboundPacket {
  return (obj || new InboundPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsInboundPacket(bb:flatbuffers.ByteBuffer, obj?:InboundPacket):InboundPacket {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new InboundPacket()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

packetCounter():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
}

acknowledgeMe():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

packetType():InboundUnion {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : InboundUnion.NONE;
}

packet<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

static startInboundPacket(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addPacketCounter(builder:flatbuffers.Builder, packetCounter:number) {
  builder.addFieldInt32(0, packetCounter, 0);
}

static addAcknowledgeMe(builder:flatbuffers.Builder, acknowledgeMe:boolean) {
  builder.addFieldInt8(1, +acknowledgeMe, +false);
}

static addPacketType(builder:flatbuffers.Builder, packetType:InboundUnion) {
  builder.addFieldInt8(2, packetType, InboundUnion.NONE);
}

static addPacket(builder:flatbuffers.Builder, packetOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, packetOffset, 0);
}

static endInboundPacket(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createInboundPacket(builder:flatbuffers.Builder, packetCounter:number, acknowledgeMe:boolean, packetType:InboundUnion, packetOffset:flatbuffers.Offset):flatbuffers.Offset {
  InboundPacket.startInboundPacket(builder);
  InboundPacket.addPacketCounter(builder, packetCounter);
  InboundPacket.addAcknowledgeMe(builder, acknowledgeMe);
  InboundPacket.addPacketType(builder, packetType);
  InboundPacket.addPacket(builder, packetOffset);
  return InboundPacket.endInboundPacket(builder);
}

unpack(): InboundPacketT {
  return new InboundPacketT(
    this.packetCounter(),
    this.acknowledgeMe(),
    this.packetType(),
    (() => {
      let temp = unionToInboundUnion(this.packetType(), this.packet.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })()
  );
}


unpackTo(_o: InboundPacketT): void {
  _o.packetCounter = this.packetCounter();
  _o.acknowledgeMe = this.acknowledgeMe();
  _o.packetType = this.packetType();
  _o.packet = (() => {
      let temp = unionToInboundUnion(this.packetType(), this.packet.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
}
}

export class InboundPacketT {
constructor(
  public packetCounter: number = 0,
  public acknowledgeMe: boolean = false,
  public packetType: InboundUnion = InboundUnion.NONE,
  public packet: AcknowledgementT|AssignTrackerRequestT|ChangeSettingsRequestT|ChangeSkeletonConfigRequestT|ConnectionRequestT|ResetRequestT|SettingsRequestT|SkeletonConfigRequestT|null = null
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const packet = builder.createObjectOffset(this.packet);

  return InboundPacket.createInboundPacket(builder,
    this.packetCounter,
    this.acknowledgeMe,
    this.packetType,
    packet
  );
}
}
