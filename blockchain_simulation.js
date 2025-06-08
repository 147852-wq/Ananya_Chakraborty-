# Ananya_Chakraborty-
 Build a basic blockchain with 3 linked blocks using code. 
import hashlib
import time

class Block:
    def __init__(self, index, data, previous_hash):
        self.index = index
        self.timestamp = time.time()
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.compute_hash()

    def compute_hash(self):
        block_string = f"{self.index}{self.timestamp}{self.data}{self.previous_hash}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def __str__(self):
        return (
            f"Block #{self.index}\n"
            f"Timestamp: {self.timestamp}\n"
            f"Data: {self.data}\n"
            f"Previous Hash: {self.previous_hash}\n"
            f"Hash: {self.hash}\n"
        )

# Create the genesis block
block0 = Block(0, "Genesis Block", "0")

# Create two more linked blocks
block1 = Block(1, "Block 1 Data", block0.hash)
block2 = Block(2, "Block 2 Data", block1.hash)




# Print the blocks
print(block0)
print(block1)
print(block2)
Create a Block class with: 
○ index, timestamp, data, previousHash, hash, and nonce 

import hashlib
import time

class Block:
    def __init__(self, index, data, previous_hash, difficulty=2):
        self.index = index
        self.timestamp = time.time()
        self.data = data
        self.previous_hash = previous_hash
        self.nonce = 0
        self.difficulty = difficulty
        self.hash = self.mine_block()

    def compute_hash(self):
        block_string = f"{self.index}{self.timestamp}{self.data}{self.previous_hash}{self.nonce}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def mine_block(self):
        # Simple Proof-of-Work: Find a hash that starts with `difficulty` number of 0s
        print(f"Mining block #{self.index}...")
        while True:
            hash_attempt = self.compute_hash()
            if hash_attempt.startswith('0' * self.difficulty):
                return hash_attempt
            self.nonce += 1

    def __str__(self):
        return (
            f"Block #{self.index}\n"
            f"Timestamp: {self.timestamp}\n"
            f"Data: {self.data}\n"
            f"Previous Hash: {self.previous_hash}\n"
            f"Nonce: {self.nonce}\n"
            f"Hash: {self.hash}\n"
        )
 Implement a simple hash generator using SHA-256 
 import hashlib

def generate_sha256_hash(data):
    # Convert data to bytes, then hash using SHA-256
    return hashlib.sha256(data.encode()).hexdigest()

# Example usage
text = input("Enter text to hash: ")
hash_result = generate_sha256_hash(text)
print("SHA-256 Hash:", hash_result)

 Link 3 blocks by chaining their previousHash 

 import hashlib
import time

class Block:
    def __init__(self, index, data, previous_hash, difficulty=2):
        self.index = index
        self.timestamp = time.time()
        self.data = data
        self.previous_hash = previous_hash
        self.nonce = 0
        self.difficulty = difficulty
        self.hash = self.mine_block()

    def compute_hash(self):
        block_string = f"{self.index}{self.timestamp}{self.data}{self.previous_hash}{self.nonce}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def mine_block(self):
        print(f"Mining Block #{self.index}...")
        while True:
            hash_attempt = self.compute_hash()
            if hash_attempt.startswith('0' * self.difficulty):
                return hash_attempt
            self.nonce += 1

    def __str__(self):
        return (
            f"\nBlock #{self.index}\n"
            f"Timestamp     : {self.timestamp}\n"
            f"Data          : {self.data}\n"
            f"Previous Hash : {self.previous_hash}\n"
            f"Nonce         : {self.nonce}\n"
            f"Hash          : {self.hash}\n"
        )

# Creating and linking 3 blocks

# Block 0 (Genesis Block)
block0 = Block(0, "Genesis Block", "0")

# Block 1 linked to block0
block1 = Block(1, "Second Block", block0.hash)

# Block 2 linked to block1
block2 = Block(2, "Third Block", block1.hash)

# Print all blocks
print(block0)
print(block1)
print(block2)
Display all blocks with their hashes 
import hashlib
import time

class Block:
    def __init__(self, index, data, previous_hash, difficulty=2):
        self.index = index
        self.timestamp = time.time()
        self.data = data
        self.previous_hash = previous_hash
        self.nonce = 0
        self.difficulty = difficulty
        self.hash = self.mine_block()

    def compute_hash(self):
        block_string = f"{self.index}{self.timestamp}{self.data}{self.previous_hash}{self.nonce}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def mine_block(self):
        print(f"Mining Block #{self.index}...")
        while True:
            computed_hash = self.compute_hash()
            if computed_hash.startswith('0' * self.difficulty):
                return computed_hash
            self.nonce += 1

    def display(self):
        print(f"\nBlock #{self.index}")
        print(f"Timestamp     : {self.timestamp}")
        print(f"Data          : {self.data}")
        print(f"Previous Hash : {self.previous_hash}")
        print(f"Nonce         : {self.nonce}")
        print(f"Hash          : {self.hash}")

# --- Create and link the blocks ---

# Genesis Block
block0 = Block(0, "Genesis Block", "0")

# Second Block linked to Genesis
block1 = Block(1, "Second Block", block0.hash)

# Third Block linked to Second
block2 = Block(2, "Third Block", block1.hash)

# --- Display all blocks with hashes ---
block0.display()
block1.display()
block2.display()

Sample Output (truncated for clarity):
Mining Block #0...
Mining Block #1...
Mining Block #2...

Block #0
Timestamp     : 1720422880.72
Data          : Genesis Block
Previous Hash : 0
Nonce         : 1374
Hash          : 00a9f2d...

Block #1
Timestamp     : 1720422881.83
Data          : Second Block
Previous Hash : 00a9f2d...
Nonce         : 924
Hash          : 003b84c...

Block #2
Timestamp     : 1720422882.95
Data          : Third Block
Previous Hash : 003b84c...
Nonce         : 1021
Hash          : 001ce77...
�
�
 Challenge: 
● Change the data of Block 1 and recalculate its hash. 
● Observe how all following blocks become invalid unless hashes are recomputed.
import hashlib
import time

class Block:
    def __init__(self, index, data, previous_hash, difficulty=2):
        self.index = index
        self.timestamp = time.time()
        self.data = data
        self.previous_hash = previous_hash
        self.nonce = 0
        self.difficulty = difficulty
        self.hash = self.mine_block()

    def compute_hash(self):
        block_string = f"{self.index}{self.timestamp}{self.data}{self.previous_hash}{self.nonce}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def mine_block(self):
        while True:
            computed_hash = self.compute_hash()
            if computed_hash.startswith('0' * self.difficulty):
                return computed_hash
            self.nonce += 1

    def display(self):
        print(f"\nBlock #{self.index}")
        print(f"Timestamp     : {self.timestamp}")
        print(f"Data          : {self.data}")
        print(f"Previous Hash : {self.previous_hash}")
        print(f"Nonce         : {self.nonce}")
        print(f"Hash          : {self.hash}")

# Step 1: Create and link 3 blocks
block0 = Block(0, "Genesis Block", "0")
block1 = Block(1, "Second Block", block0.hash)
block2 = Block(2, "Third Block", block1.hash)

# Step 2: Display original chain
print("⛓️ Original Blockchain:")
block0.display()
block1.display()
block2.display()

# Step 3: Tamper with Block 1
print("\n🔧 Tampering with Block 1's data...")
block1.data = "Hacked Data"
block1.hash = block1.mine_block()  # Recalculate Block 1's hash

# Step 4: Display tampered chain
print("\n🚨 Tampered Blockchain:")
block0.display()
block1.display()
block2.display()  # Block 2's previous hash is now invalid

# Step 5: Check chain validity
def validate_chain(blocks):
    for i in range(1, len(blocks)):
        if blocks[i].previous_hash != blocks[i - 1].hash:
            print(f"❌ Block #{i} is INVALID!")
        else:
            print(f"✅ Block #{i} is valid.")

print("\n🔍 Validating Blockchain:")
validate_chain([block0, block1, block2])
After changing Block 1’s data:

Its hash changes

Block 2’s previous_hash now points to an old, incorrect hash

This breaks the chain
