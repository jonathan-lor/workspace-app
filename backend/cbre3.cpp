#include <iostream> 
#include <sstream>
#include <fstream>
#include <vector>
#include <unordered_set>
using namespace std;

// int FLOORS = 5;
// Floor    Max-Capacity        1   2   3   4   5   6   7   8   9   10  11
//  A        43                 22  45  34  51  11  37  42  16  29  56  49
//  B        81
//  C        73
//  D        54
//  E        97

struct Team{
    int team;
    int strength;
    unordered_set<int> pref;
    unordered_set<int> tol;
    unordered_set<int> noway;
};

struct Group{
    unordered_set<int> team_nums;
    int size;
};

struct Floor{
    char name;
    unordered_set<int> occ; // currenly occupied teams
    int max; // max floor cap.
    int size; // current floor size
};

// Team Strength    Preferred      Tolerated    No-way
// 1    22          2, 4, 6, 11    3, 8, 10     5, 7, 9

bool inSet(unordered_set<int> s, int x){
    return s.find(x) != s.end();
}

vector<Team*> populateFromFile(string filename){
    vector<Team*> teams;
    string line;
    fstream fin(filename);

    string tn;
    string s;
    unordered_set<int> p;
    unordered_set<int> t;
    unordered_set<int> nw;

    while(fin.good()){
        p.clear();
        t.clear();
        nw.clear();
        getline(fin, tn);
        getline(fin, s);

        getline(fin, line);
        stringstream ss(line);
        for (int i; ss >> i;) {
            // p[i]++;
            p.insert(i);
            if (ss.peek() == ',' || ss.peek() == ' ')
                ss.ignore();
        }
        
        getline(fin, line);
        stringstream ss2(line);
        for (int i; ss2 >> i;) {
            // t[i]++;    
            t.insert(i);
            if (ss2.peek() == ',' || ss2.peek() == ' ')
                ss2.ignore();
        }

        getline(fin, line);
        stringstream ss3(line);
        for (int i; ss3 >> i;) {
            // nw[i]++;    
            nw.insert(i);
            if (ss3.peek() == ',' || ss3.peek() == ' ')
                ss3.ignore();
        }
        
        Team* newTeam = new Team;
        newTeam->team = stoi(tn);
        newTeam->strength = stoi(s);
        newTeam->pref = p;
        newTeam->tol = t;
        newTeam->noway = nw;
        teams.push_back(newTeam);
    }

    return teams;
}

vector<Floor*> createFloors(){
    vector<Floor*> floors;
    Floor* a = new Floor;
    a->name = 'A';
    a->max = 43;
    a->size = 0;
    Floor* b = new Floor;
    b->name = 'B';
    b->max = 81;
    b->size = 0;
    Floor* c = new Floor;
    c->name = 'C';
    c->max = 73;
    c->size = 0;
    Floor* d = new Floor;
    d->name = 'D';
    d->max = 54;
    d->size = 0;
    Floor* e = new Floor;
    e->name = 'E';
    e->max = 97;
    e->size = 0;

    floors.push_back(a);
    floors.push_back(b);
    floors.push_back(c);
    floors.push_back(d);
    floors.push_back(e);
    
    return floors;
}

void printAllNums(vector<Team*> teams){
    for(int i = 0; i < teams.size(); i++){
        cout << "Team #:   " << teams[i]->team << endl;
        cout << "Strength: " << teams[i]->strength << endl;
        cout << "Pref:     ";
        for(int x : teams[i]->pref) cout << x << " ";
        // for ( auto it = teams[i]->pref.begin(); it != teams[i]->pref.end(); ++it ) cout << it->first << " ";
        cout << endl;
        cout << "Tol:      ";
        for(int x : teams[i]->tol) cout << x << " ";
        // for ( auto it = teams[i]->tol.begin(); it != teams[i]->tol.end(); ++it ) cout << it->first << " ";
        cout << endl;
        cout << "NoWay:    ";
        for(int x : teams[i]->noway) cout << x << " ";
        // for ( auto it = teams[i]->noway.begin(); it != teams[i]->noway.end(); ++it ) cout << it->first << " ";
        cout << endl;
        cout << endl;
    }
}

void printAllNums2(vector<Team*> teams){
    for(int i = 0; i < teams.size(); i++){
        cout << "Team #:   " << teams[i]->team << endl;
        cout << "Strength: " << teams[i]->strength << endl;
        cout << "Pref:     ";
        for(int x : teams[i]->pref) cout << x << " ";
        // for ( auto it = teams[i]->pref.begin(); it != teams[i]->pref.end(); ++it ) cout << it->first << " ";
        cout << endl;
        cout << "Tol:      ";
        // for ( auto it = teams[i]->tol.begin(); it != teams[i]->tol.end(); ++it ) cout << it->first << " ";
        for(int x : teams[i]->tol) cout << x << " ";
        cout << endl;
        cout << endl;
    }
}

void printAllNums3(vector<Team*> teams){
    for(int i = 0; i < teams.size(); i++){
        cout << "Team #:   " << teams[i]->team << "  Strength: " << teams[i]->strength << endl;
    }
}

void printAllGroups(vector< Group* > groups, vector<Team*> teams){
    for(int i = 0; i < groups.size(); i++){
        cout << "Size: " << groups[i]->size << "    Groups: ";
        for(int x : groups[i]->team_nums){
        // for ( auto it = groups[i]->team_nums.begin(); it != groups[i]->team_nums.end(); ++it ){
            cout << x << " ";
        }
        cout << endl;
    }
}

void printFloors(vector<Floor*> floors){
    for(Floor* x : floors){
        cout << "Name: " << x->name << "  Max: " << x->max;
        cout << "  Has: ";
        for(int y : x->occ){
            cout << y << " ";
        }
        cout << endl;
    }
}

void eliminateNoWay(vector<Team*> teams){
    for(int i = 0; i < teams.size(); i++){

        for(int j : teams[i]->noway){
            int team_to_elem = j;

            if(inSet(teams[team_to_elem - 1]->pref, i+1)){
                teams[team_to_elem - 1]->pref.erase(i+1);
            }

            if(inSet(teams[team_to_elem - 1]->tol, i+1)){
                teams[team_to_elem - 1]->tol.erase(i+1);
            }

        }
    }
}

void fillFloors(vector<Floor*> floors, vector<Team*> teams){
    unordered_set<int> available = {1,2,3,4,5,6,7,8,9,10,11};
    
}

bool compareForTeams(Team* a, Team* b){
    return a->strength > b->strength;
}

bool compareForFloors(Floor* a, Floor* b){
    return a->max > b->max;
}

int main(){
    vector<Team*> teams = populateFromFile("example2.csv");
    // printAllNums(teams);
    eliminateNoWay(teams);
    // cout << endl << endl << "   [AFTER]" << endl << endl;
    sort(teams.begin(), teams.end(), compareForTeams); // ordered greatest to least 
    printAllNums3(teams);

    vector<Floor*> floors = createFloors();
    sort(floors.begin(), floors.end(), compareForFloors);
    printFloors(floors);

    return 0;
}

