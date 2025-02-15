// automatically generated by the FlatBuffers compiler, do not modify

package slimevr_protocol.server;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class ChangeSettingsRequest extends Table {
  public static void ValidateVersion() { Constants.FLATBUFFERS_2_0_0(); }
  public static ChangeSettingsRequest getRootAsChangeSettingsRequest(ByteBuffer _bb) { return getRootAsChangeSettingsRequest(_bb, new ChangeSettingsRequest()); }
  public static ChangeSettingsRequest getRootAsChangeSettingsRequest(ByteBuffer _bb, ChangeSettingsRequest obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __reset(_i, _bb); }
  public ChangeSettingsRequest __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public slimevr_protocol.server.SteamVRTrackersSetting steamVrTrackers() { return steamVrTrackers(new slimevr_protocol.server.SteamVRTrackersSetting()); }
  public slimevr_protocol.server.SteamVRTrackersSetting steamVrTrackers(slimevr_protocol.server.SteamVRTrackersSetting obj) { int o = __offset(4); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  public slimevr_protocol.server.FilteringSettings filtering() { return filtering(new slimevr_protocol.server.FilteringSettings()); }
  public slimevr_protocol.server.FilteringSettings filtering(slimevr_protocol.server.FilteringSettings obj) { int o = __offset(6); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }

  public static int createChangeSettingsRequest(FlatBufferBuilder builder,
      int steamVrTrackersOffset,
      int filteringOffset) {
    builder.startTable(2);
    ChangeSettingsRequest.addFiltering(builder, filteringOffset);
    ChangeSettingsRequest.addSteamVrTrackers(builder, steamVrTrackersOffset);
    return ChangeSettingsRequest.endChangeSettingsRequest(builder);
  }

  public static void startChangeSettingsRequest(FlatBufferBuilder builder) { builder.startTable(2); }
  public static void addSteamVrTrackers(FlatBufferBuilder builder, int steamVrTrackersOffset) { builder.addOffset(0, steamVrTrackersOffset, 0); }
  public static void addFiltering(FlatBufferBuilder builder, int filteringOffset) { builder.addOffset(1, filteringOffset, 0); }
  public static int endChangeSettingsRequest(FlatBufferBuilder builder) {
    int o = builder.endTable();
    return o;
  }

  public static final class Vector extends BaseVector {
    public Vector __assign(int _vector, int _element_size, ByteBuffer _bb) { __reset(_vector, _element_size, _bb); return this; }

    public ChangeSettingsRequest get(int j) { return get(new ChangeSettingsRequest(), j); }
    public ChangeSettingsRequest get(ChangeSettingsRequest obj, int j) {  return obj.__assign(__indirect(__element(j), bb), bb); }
  }
}

