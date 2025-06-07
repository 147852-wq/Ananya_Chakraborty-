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

2.Simulate Proof-of-Work by mining a block that satisfies a difficulty condition.
import hashlib
import time

def mine_block(data, previous_hash, difficulty):
    nonce = 0
    prefix = '0' * difficulty
    print(f"Mining block with difficulty: {difficulty} (hash prefix = {prefix})")
    start_time = time.time()

    while True:
        # Prepare the block content string
        block_content = f"{data}{previous_hash}{nonce}"
        block_hash = hashlib.sha256(block_content.encode()).hexdigest()
        
        # Check if hash meets difficulty criteria
        if block_hash.startswith(prefix):
            elapsed_time = time.time() - start_time
            print(f"Block mined!")
            print(f"Nonce: {nonce}")
            print(f"Hash: {block_hash}")
            print(f"Time taken: {elapsed_time:.2f} seconds")
            return nonce, block_hash
        nonce += 1

# Example usage:
data = "Sample transaction data"
previous_hash = "000000abc123"
difficulty = 4  # Number of leading zeros required

mine_block(data, previous_hash, difficulty)
It keeps changing the nonce until the SHA-256 hash of (data + previous_hash + nonce) starts with difficulty number of zeros.
 Modify your Block class to include a mineBlock(difficulty) function 
 import hashlib
import time

class Block:
    def __init__(self, data, previous_hash=''):
        self.data = data
        self.previous_hash = previous_hash
        self.timestamp = time.time()
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        block_content = f"{self.data}{self.previous_hash}{self.timestamp}{self.nonce}"
        return hashlib.sha256(block_content.encode()).hexdigest()

    def mineBlock(self, difficulty):
        print(f"⛏️  Mining block with difficulty {difficulty}...")
        prefix = '0' * difficulty

        while not self.hash.startswith(prefix):
            self.nonce += 1
            self.hash = self.calculate_hash()

        print(f"✅ Block mined: {self.hash}")
        print(f"Nonce used: {self.nonce}\n")

# Example usage:
if __name__ == "__main__":
    genesis_block = Block("Genesis Block", "0")
    genesis_block.mineBlock(difficulty=4)

    block2 = Block("Block 2 data", genesis_block.hash)
    block2.mineBlock(difficulty=4)
Set difficulty (e.g., hash must start with "0000") 
import hashlib
import time

class Block:
    def __init__(self, data, previous_hash=''):
        self.data = data
        self.previous_hash = previous_hash
        self.timestamp = time.time()
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        content = f"{self.data}{self.previous_hash}{self.timestamp}{self.nonce}"
        return hashlib.sha256(content.encode()).hexdigest()

    def mine_block(self, difficulty_prefix):
        print(f"⛏️ Mining block until hash starts with '{difficulty_prefix}'...")
        while not self.hash.startswith(difficulty_prefix):
            self.nonce += 1
            self.hash = self.calculate_hash()
        print(f"✅ Block mined! Hash: {self.hash}")
        print(f"Nonce: {self.nonce}\n")

# Example usage:
if __name__ == "__main__":
    difficulty = "0000"  # Hash must start with this prefix
    genesis = Block("Genesis block data", "0")
    genesis.mine_block(difficulty)

    block2 = Block("Second block data", genesis.hash)
    block2.mine_block(difficulty)
In mineBlock(), repeatedly increment the nonce until the hash meets the difficulty 
condition 
import hashlib
import time

class Block:
    def __init__(self, data, previous_hash=''):
        self.data = data
        self.previous_hash = previous_hash
        self.timestamp = time.time()
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        block_string = f"{self.data}{self.previous_hash}{self.timestamp}{self.nonce}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def mineBlock(self, difficulty_prefix="0000"):
        print(f"⛏️ Mining block until hash starts with '{difficulty_prefix}'...")
        while not self.hash.startswith(difficulty_prefix):
            self.nonce += 1
            self.hash = self.calculate_hash()
        print(f"✅ Block mined successfully!")
        print(f"Hash: {self.hash}")
        print(f"Nonce: {self.nonce}\n")

# Example usage
if __name__ == "__main__":
    # Set the difficulty (prefix the hash must start with)
    difficulty = "0000"

    # Create and mine the genesis block
    genesis_block = Block("Genesis Block", "0")
    genesis_block.mineBlock(difficulty)

    # Create and mine the second block
    block2 = Block("Block 2 Data", genesis_block.hash)
    block2.mineBlock(difficulty)




