#!/bin/bash
cd $(cd "$(dirname "$0")";pwd)
python3 -m http.server 5000