// automatically generated by the FlatBuffers compiler, do not modify
extern crate flatbuffers;
use std::mem;
use std::cmp::Ordering;
use self::flatbuffers::{EndianScalar, Follow};
use super::*;
pub enum DeviceInfoRequestOffset {}
#[derive(Copy, Clone, PartialEq)]

pub struct DeviceInfoRequest<'a> {
  pub _tab: flatbuffers::Table<'a>,
}

impl<'a> flatbuffers::Follow<'a> for DeviceInfoRequest<'a> {
  type Inner = DeviceInfoRequest<'a>;
  #[inline]
  fn follow(buf: &'a [u8], loc: usize) -> Self::Inner {
    Self { _tab: flatbuffers::Table { buf, loc } }
  }
}

impl<'a> DeviceInfoRequest<'a> {

  #[inline]
  pub fn init_from_table(table: flatbuffers::Table<'a>) -> Self {
    DeviceInfoRequest { _tab: table }
  }
  #[allow(unused_mut)]
  pub fn create<'bldr: 'args, 'args: 'mut_bldr, 'mut_bldr>(
    _fbb: &'mut_bldr mut flatbuffers::FlatBufferBuilder<'bldr>,
    _args: &'args DeviceInfoRequestArgs
  ) -> flatbuffers::WIPOffset<DeviceInfoRequest<'bldr>> {
    let mut builder = DeviceInfoRequestBuilder::new(_fbb);
    builder.finish()
  }

}

impl flatbuffers::Verifiable for DeviceInfoRequest<'_> {
  #[inline]
  fn run_verifier(
    v: &mut flatbuffers::Verifier, pos: usize
  ) -> Result<(), flatbuffers::InvalidFlatbuffer> {
    use self::flatbuffers::Verifiable;
    v.visit_table(pos)?
     .finish();
    Ok(())
  }
}
pub struct DeviceInfoRequestArgs {
}
impl<'a> Default for DeviceInfoRequestArgs {
  #[inline]
  fn default() -> Self {
    DeviceInfoRequestArgs {
    }
  }
}

pub struct DeviceInfoRequestBuilder<'a: 'b, 'b> {
  fbb_: &'b mut flatbuffers::FlatBufferBuilder<'a>,
  start_: flatbuffers::WIPOffset<flatbuffers::TableUnfinishedWIPOffset>,
}
impl<'a: 'b, 'b> DeviceInfoRequestBuilder<'a, 'b> {
  #[inline]
  pub fn new(_fbb: &'b mut flatbuffers::FlatBufferBuilder<'a>) -> DeviceInfoRequestBuilder<'a, 'b> {
    let start = _fbb.start_table();
    DeviceInfoRequestBuilder {
      fbb_: _fbb,
      start_: start,
    }
  }
  #[inline]
  pub fn finish(self) -> flatbuffers::WIPOffset<DeviceInfoRequest<'a>> {
    let o = self.fbb_.end_table(self.start_);
    flatbuffers::WIPOffset::new(o.value())
  }
}

impl std::fmt::Debug for DeviceInfoRequest<'_> {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    let mut ds = f.debug_struct("DeviceInfoRequest");
      ds.finish()
  }
}
