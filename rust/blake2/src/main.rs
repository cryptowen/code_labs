use blake2::digest::{Update, VariableOutput};
use blake2::VarBlake2b;
use blake2b_ref::{Blake2b, Blake2bBuilder};
use ckb_tool::ckb_hash;

const CKB_HASH_PERSONALIZATION: &[u8] = b"ckb-default-hash";

fn new_blake2b() -> Blake2b {
    Blake2bBuilder::new(32)
        .personal(CKB_HASH_PERSONALIZATION)
        .build()
}

fn main() {
    let raw_msg = b"hello world";

    let mut ctx = VarBlake2b::with_params(b"", b"", CKB_HASH_PERSONALIZATION, 32);
    ctx.update(raw_msg);
    ctx.finalize_variable(|message| {
        let res = hex::encode(message);
        dbg!(&res);
    });

    let mut blake2b_custom = new_blake2b();
    let mut message = [0u8; 32];
    blake2b_custom.update(raw_msg);
    blake2b_custom.finalize(&mut message);
    let res = hex::encode(message);
    dbg!(&res);

    let mut blake2b = ckb_hash::new_blake2b();
    let mut message = [0u8; 32];
    blake2b.update(raw_msg);
    blake2b.finalize(&mut message);
    let res = hex::encode(message);
    dbg!(&res);
}
