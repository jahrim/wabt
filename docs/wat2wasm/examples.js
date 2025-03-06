/*
 * Copyright 2016 WebAssembly Community Group participants
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var examples = [
  {
    name: 'main',
    contents:
`(module
  (func (export "main") (result i32)
    ;; Instruction ;; Stack ;; Explanation
    i32.const 1    ;; [1]   ;; push an i32 with value 1
    i32.const 2    ;; [2 1] ;; push an i32 with value 2
    i32.add        ;; [3]   ;; pop two i32s, sum them, and push the result
  ))
`,
  },
  {
    name: 'main',
    contents:
`(module
  (func (export "main") (result i32)
    ;; Instruction ;; Stack ;; Explanation
    i32.const 1    ;; [1]   ;; push an i32 with value 1
    i32.const 2    ;; [2 1] ;; push an i32 with value 2
    i32.add        ;; [3]   ;; pop two i32s, sum them, and push the result
  ))
`,
  },
  {
    name: 'empty',
    contents: '(module)',
  },
  {
    name: 'simple',
    contents:
`(module
  (func (export "addTwo") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add))
`
  },

  {
    name: 'factorial',
    contents:
`(module
  (func $fac (export "fac") (param f64) (result f64)
    local.get 0
    f64.const 1
    f64.lt
    if (result f64)
      f64.const 1
    else
      local.get 0
      local.get 0
      f64.const 1
      f64.sub
      call $fac
      f64.mul
    end))
`
  },

  {
    name: 'stuff',
    contents:
`(module
  (import "foo" "bar" (func (param f32)))
  (memory (data "hi"))
  (type (func (param i32) (result i32)))
  (start 1)
  (table 0 1 funcref)
  (func)
  (func (type 1)
    i32.const 42
    drop)
  (export "e" (func 1)))
`,
  },

  {
    name: 'mutable globals',
    contents:
`(module
  (import "env" "g" (global (mut i32)))
  (func (export "f")
    i32.const 100
    global.set 0))
`,
  },

  {
    name: "saturating float-to-int",
    contents:
`(module
  (func (export "f") (param f32) (result i32)
    local.get 0
    i32.trunc_sat_f32_s))`,
  },

  {
    name: "sign extension",
    contents:
`(module
  (func (export "f") (param i32) (result i32)
    local.get 0
    i32.extend8_s))
`,
  },

  {
    name: "multi value",
    contents:
`(module
  (func $swap (param i32 i32) (result i32 i32)
    local.get 1
    local.get 0)

  (func (export "reverseSub") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    call $swap
    i32.sub))
`,
  },

  {
    name: "bulk memory",
    contents:
`(module
  (memory (export "mem") 1)
  (func (export "fill") (param i32 i32 i32)
    local.get 0
    local.get 1
    local.get 2
    memory.fill))
`,
  }
];
