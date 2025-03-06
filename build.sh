echo "Require CMake: https://cmake.org/"
cmake --version

echo "Build C++: Start"
mkdir build
cd build
cmake ..
cmake --build .
echo "Build C++: Done"