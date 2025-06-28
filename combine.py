import os
from pathlib import Path

def combine_markdown_files(docs_dir, output_file):
    """
    Combines all markdown files from the specified directory into a single file.
    
    Args:
        docs_dir (str): Path to the directory containing markdown files
        output_file (str): Path to the output file
    """
    # Convert to Path object for better path handling
    docs_path = Path(docs_dir)
    
    # Get all markdown files
    markdown_files = sorted(
        [f for f in docs_path.glob("**/*.md")],
        key=lambda x: str(x)
    )
    
    if not markdown_files:
        print(f"No markdown files found in {docs_dir}")
        return
    
    # Combine files
    with open(output_file, 'w', encoding='utf-8') as outfile:
        # Add a title to the combined file
        outfile.write(f"# Combined Markdown Documentation\n\n")
        
        for markdown_file in markdown_files:
            # Add a separator and file name as a header
            outfile.write(f"\n## From: {markdown_file.name}\n\n")
            
            # Read and write content
            try:
                with open(markdown_file, 'r', encoding='utf-8') as infile:
                    content = infile.read()
                    outfile.write(content)
                    # Ensure there's a newline between files
                    if not content.endswith('\n'):
                        outfile.write('\n')
                    outfile.write('\n---\n')
            except Exception as e:
                print(f"Error processing {markdown_file}: {str(e)}")

if __name__ == "__main__":
    # You can modify these paths as needed
    docs_directory = "docs"
    output_filepath = "combined_docs.md"
    
    combine_markdown_files(docs_directory, output_filepath)
    print(f"Documentation combined into {output_filepath}")