echo "Require Emscripten SDK: https://emscripten.org/"
emcc --version

echo "Require CMake: https://cmake.org/"
cmake --version

echo "Build Javascript: Start"
emcmake cmake -B buildjs
cd buildjs
make -j $(nproc)
echo "Build Javascript: Done"